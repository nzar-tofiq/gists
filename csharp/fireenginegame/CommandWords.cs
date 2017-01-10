using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FSM
{
    /// <summary>
    /// Creates, sorts and shows recognised command words, second words, third words
    /// </summary>
    class CommandWords
    {
        /// <summary>
        /// Valid words that are recognised as the first word of the command line
        /// </summary>
        private static string[] validCommands = { "quit", "room", "clear", "engine", "help" };
        /// <summary>
        /// Valid words that are recognised as the second word of the command line
        /// </summary>
        private static string[] validSecondWords = { "list", "goto", "refil", "report", "callback" };
        /// <summary>
        /// Valid words that are recognised as the third word of the command line
        /// </summary>
        private static string[] validThirdWords = { "room" };

        /// <summary>
        /// checks the first word against recognisable command words
        /// </summary>
        /// <param name="command">Command word or the first word in the command line</param>
        /// <returns>true or false</returns>
        public static Boolean isCommand(string command)
        {
            if (validCommands.Contains(command))
                return true;
            return false;
        }

        /// <summary>
        /// Displays all recognised command words, second words and third words
        /// </summary>
        public static void showAll()
        {
            Console.WriteLine("Valid Commands: ");
            foreach (string c in validCommands)
            {
                Console.Write(c + ", ");
            }
            Console.WriteLine("\nValid Second Words: ");
            foreach (string s in validSecondWords)
            {
                Console.Write(s + ", ");
            }
            Console.WriteLine("\nValid Third Words: ");
            foreach (string s in validThirdWords)
            {
                Console.Write(s + ", ");
            }
            Console.WriteLine("\nTo send the engine to any room type: engine goto room roomNumber\n Like: engine goto room 10");
        }
    }
}

