import { Injectable } from "@angular/core";
import { Repo } from '../repo';

@Injectable()
export class RepoService {
    private repos: Repo[] = [
        { 
            name: "Weather Report",
            description: "This is a program that utilizes the OpenWeatherMap API to collect information about the day's forecast. It then analyzes the weather conditions and generates a report which is emailed to the user with a description of the weather for the day and suggested activities based on the current weather conditions. It will be run once every morning."
        },
        {
            name: "Arm Assembly Language Emulator",
            description: "This is an Android application that emulates a code editor for ARM Assembly Language. It enables users select the line of the text editor that they desire and then they are prompted for what type of operation they would perform. The user is then able to select operation type and paramters, such as constants and register numbers. The editor is then updated with the corresponding operation code. Upon executing the play button, the user is able to visually see how the binary numbers being stored in the computer's memory or register banks are altered."
        },
        {
            name: "Hangman Web Browser Name",
            description: "This is a web browser game variation of the classic game of hangman. It comes with a slight twist, however. The user is only notified of the correct letters that they guess, not the location of the correct letters. The user is then able to make a guess on what the word is based on the correct letters that they have guessed."
        },
        {
            name: "Tic Tac Toe",
            description: "This is a web browser game that simulates the classic game of tic tac toe. It utilizes web storage to keep track of how many wins each player has."
        },
        {
            name: "Calculator",
            description: "Simple scientific calculator implementation with memory function that enables you to access previous answers via an answer key in new equations. Implemented in Java."
        },
        {
            name: "HigherEdJobs WebScraper",
            description: "Web Scraper for HigherEdJobs and Data Visualizations"
        }
    ];

    getRepos(): Repo[] {
        return this.repos;
    }
}