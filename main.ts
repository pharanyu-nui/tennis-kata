//
// Your implementations
// 

export interface Game {
    player1Score: number;
    player2Score: number;
}

export function updateGameScore(point1: number, point2: number): Game {
    return {
        player1Score: point1,
        player2Score: point2
    }
}

export function decideGameWinner(game: Game): string {
    if (game.player1Score < 4 && game.player2Score < 4) {
        return '??'
    }

    if (game.player1Score - game.player2Score >= 2) {
        return 'Player 1';
    } else if (game.player2Score - game.player1Score >= 2) {
        return 'Player 2';
    }
}

export function printScore(scores: number[]): string {
    const textScore = ['love', 'fifteen', 'thirty', 'forty'];
    const convertScoreToTexts: string[] = scores.map((score, index) => {
        if (index !== scores.length - 1) {
            return textScore[score] + ' - ' 
        } else {
            return textScore[score]
        }
    });
    return ''.concat(...convertScoreToTexts);
}


// given
const player1Points = 4;
const player2Points = 0;

// when
const game = updateGameScore(player1Points, player2Points);
const winner = decideGameWinner(game);

console.log(winner);