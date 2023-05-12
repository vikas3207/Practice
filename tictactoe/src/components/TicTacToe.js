import React, { useState } from 'react';
import '../cssfiles/tictactoe.css'

function TicTacToe(){

    const[board,setBoard] = useState (Array(9).fill(''));
    const[value,setValue] = useState('X')
    function boardClick(n){
        
        let square = [...board]
        
        square[n] = value;
        setBoard(square)
        
        if(value === 'X'){
            setValue('O')
        }else{
            setValue('X')
        }
        
        if(board[n] !== ''){
            alert("You can't Change Value");
            return;
        }
     
       if (checkWinner(square)){
        alert (" Winner")
       }

       

        console.log("cliecekd " + n)
    }

    const checkWinner = (board) => {
        const conditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let flag =false;
        conditions.forEach(element => {
            if(board[element[0]] !== '' && board[element[1]] !== '' && board[element[2]] !== ''){
            if(board[element[0]] === board[element[1]] && board[element[1]] === board[element[2]]){
                flag = true;
            }
        }
        })
        return flag;
        }
        return (
        <>
            <h5>Welcome to the game , Tic Tac Toe</h5>
            <table>
                <div>
                    <tr>
                        <td onClick={() => {boardClick(0)}}>{board[0]}</td>
                        <td onClick={() => {boardClick(1)}}>{board[1]}</td>
                        <td onClick={() => {boardClick(2)}}>{board[2]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => {boardClick(3)}}>{board[3]}</td>
                        <td onClick={() => {boardClick(4)}}>{board[4]}</td>
                        <td onClick={() => {boardClick(5)}}>{board[5]}</td>
                    </tr>
                    <tr>
                        <td onClick={() => {boardClick(6)}}>{board[6]}</td>
                        <td onClick={() => {boardClick(7)}}>{board[7]}</td>
                        <td onClick={() => {boardClick(8)}}>{board[8]}</td>
                    </tr>
                </div>
            </table>
        </>
    );
};

export default TicTacToe;