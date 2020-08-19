//
// Your implementations
// 

export interface Game {
    player1: Player;
    player2: Player;
}

export interface Player {
    name: string;
    score: number;
}

export function updateGameScore(point1: number, point2: number): Game {
    return {
        player1: {
            name: 'Player 1',
            score: point1
        },
        player2: {
            name: 'Player 2',
            score: point2
        }
    }
}

export function decideGameWinner(game: Game): string {
    if (game.player1.score < 4 && game.player2.score < 4) {
        return '??'
    }

    if (game.player1.score - game.player2.score >= 2) {
        return game.player1.name;
    } else if (game.player2.score - game.player1.score >= 2) {
        return game.player2.name;
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
