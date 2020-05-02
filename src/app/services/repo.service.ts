import { Injectable } from "@angular/core";

@Injectable()
export class RepoService {
    private repoNames = [
        "Weather Report",
        "Arm Assembly Language Emulator",
        "Hangman Web Browser Name",
        "Tic Tac Toe",
        "Calculator",
        "HigherEdJobs WebScraper"
    ];

    getRepoNames(): String[] {
        return this.repoNames;
    }
}