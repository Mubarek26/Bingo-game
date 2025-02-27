// src/services/gameService.js
const players = {};
const rounds = {}; // { stake: [{ roundId, players, status, expiresAt, possibleWin }, ...] }
const playerStakes = {}; // { userId: stake }

class GameService {
  getOrCreatePlayer(userId) {
    if (!players[userId]) {
      players[userId] = { balance: 100 };
    }
    return players[userId];
  }

  joinRound(userId, stake) {
    const player = this.getOrCreatePlayer(userId);
    if (player.balance < stake) throw new Error('Not enough birr to join');

    // Check if player is in any "open" round across all stakes
    const openRound = Object.values(rounds).flat().find(
      r => r.status === 'open' && Date.now() <= r.expiresAt && r.players.includes(userId)
    );
    if (openRound) {
      const currentStake = Object.keys(rounds).find(s =>
        rounds[s].includes(openRound)
      );
      throw new Error(`You are already in an open round with stake ${currentStake} birr`);
    }

    if (!rounds[stake]) rounds[stake] = [];

    let round = rounds[stake].find(
      r => r.status === 'open' && Date.now() <= r.expiresAt
    );

    if (!round) {
      const now = Date.now();
      round = {
        roundId: `round-${stake}birr-${now}`,
        players: [],
        status: 'open',
        expiresAt: now + 15 * 1000,
        possibleWin: 0,
      };
      rounds[stake].push(round);
      setTimeout(() => {
        if (rounds[stake].includes(round)) {
          round.status = 'active';
          console.log(`Round ${round.roundId} is now active`);
        }
      }, 15 * 1000);
    }

    if (round.players.includes(userId)) {
      return { ...round, balance: player.balance, userId, alreadyJoined: true };
    }

    round.players.push(userId);
    round.possibleWin = round.players.length * stake * 1.5;
    player.balance -= stake;
    playerStakes[userId] = stake;

    return { ...round, balance: player.balance, userId };
  }

  endRound(roundId, winnerId) {
    const stake = Object.keys(rounds).find(key =>
      rounds[key].some(r => r.roundId === roundId && r.status === 'active')
    );
    if (!stake) throw new Error('Round not found or not active');

    const round = rounds[stake].find(r => r.roundId === roundId);
    round.status = 'finished';

    const payout = round.possibleWin;
    let winnerBalance = null;
    if (winnerId && round.players.includes(winnerId)) {
      players[winnerId].balance += payout;
      winnerBalance = players[winnerId].balance;
      console.log(`${winnerId} wins ${payout} birr! New balance: ${winnerBalance}`);
    }

    round.players.forEach(userId => {
      if (playerStakes[userId] === stake) {
        delete playerStakes[userId];
      }
    });

    rounds[stake] = rounds[stake].filter(r => r.status !== 'finished');
    if (rounds[stake].length === 0) delete rounds[stake];

    return {
      message: `Round ${roundId} ended. ${winnerId ? `${winnerId} won ${payout} birr!` : 'No winner.'}`,
      winnerBalance,
    };
  }

  getRounds() {
    return Object.fromEntries(
      Object.entries(rounds).map(([stake, roundList]) => [
        stake,
        roundList.map(round => ({
          roundId: round.roundId,
          players: round.players,
          status: round.status,
          expiresAt: round.expiresAt,
          possibleWin: round.possibleWin,
          timeLeft: round.status === 'open' ? Math.max(0, Math.floor((round.expiresAt - Date.now()) / 1000)) : 0,
        })),
      ])
    );
  }
}

module.exports = new GameService();