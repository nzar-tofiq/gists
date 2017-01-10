using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FSM
{
    /// <summary>
    /// Gets a command and analyses it.
    /// Checks the number of words in each command.
    /// </summary>
    class Parser
    {
        /// <summary>
        /// An instance of CommandWords, used to check the integrity of the command
        /// </summary>
        private static CommandWords commandWords = new CommandWords();

        /// <summary>
        /// Checks each command, finds the command word, the second word, the third word and the forth word
        /// Turns each word of the command into a lower case string,
        /// and positions it where required.
        /// </summary>
        /// <returns>A command</returns>
        public Command getCommand()
        {
            string inputLine;
            inputLine = Console.ReadLine();
            String[] values = inputLine.Split(' ', '\n');
            if (CommandWords.isCommand(values[0]))
            {
                if (values.Count() == 1)
                    return new Command { CommandWord = values[0].ToLower(), SecondWord = null, ThirdWord = null, ForthWord = null };
                else if (values.Count() == 2)
                    return new Command { CommandWord = values[0].ToLower(), SecondWord = values[1].ToLower(), ThirdWord = null, ForthWord = null };
                else if (values.Count() == 3)
                    return new Command { CommandWord = values[0].ToLower(), SecondWord = values[1].ToLower(), ThirdWord = values[2].ToLower(), ForthWord = null };
                else if (values.Count() == 4)
                    return new Command { CommandWord = values[0].ToLower(), SecondWord = values[1].ToLower(), ThirdWord = values[2].ToLower(), ForthWord = values[3].ToLower() };
                else
                {
                    Console.WriteLine("Try again! you can't type more than 4 words");
                    return new Command { CommandWord = null, SecondWord = null, ThirdWord = null, ForthWord = null };
                }
            }
            else
            {
                return new Command { CommandWord = null, SecondWord = null, ThirdWord = null, ForthWord = null };
            }
        }

        /// <summary>
        /// Shows all valid command words
        /// </summary>
        public void showCommands()
        {
            CommandWords.showAll();
        }
    }
}
