using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FSM
{
    /// <summary>
    /// Defines and sorts the command that has been put in by the user
    /// </summary>
    class Command
    {
        /// <summary>
        /// Command word, first word of the command line
        /// </summary>
        public string CommandWord { get; set; }
        /// <summary>
        /// Second word from the command line
        /// </summary>
        public string SecondWord { get; set; }
        /// <summary>
        /// Third word from the command line
        /// </summary>
        public string ThirdWord { get; set; }
        /// <summary>
        /// Forth word from the command line
        /// </summary>
        public string ForthWord { get; set; }
        /// <summary>
        /// If true, command is not recognised as command
        /// if false, command is recognised
        /// </summary>
        public Boolean IsUnknown { get { return (CommandWord == null); } }

        /// <summary>
        /// If true, command has second word
        /// If false, command does not have second word
        /// </summary>
        public Boolean HasSecondWord
        {
            get
            {
                if (SecondWord != null)
                    return true;
                else
                    return false;
            }
        }
        /// <summary>
        /// If true, command has the third word
        /// If false, command does not have the third word
        /// </summary>
        public Boolean HasThirdWord
        {
            get
            {
                if (ThirdWord != null)
                    return true;
                else
                    return false;
            }
        }

        /// <summary>
        /// If true, command has forth word
        /// If false, command does not have forth word
        /// </summary>
        public Boolean HasForthWord
        {
            get
            {
                if (ForthWord != null)
                    return true;
                else
                    return false;
            }
        }
    }
}
