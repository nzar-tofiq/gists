using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Fibonacci
{
    class Program
    {
        /// <summary>
        /// Prints 20 fibonacci numbers
        /// </summary>
        /// <param name="args"></param>
        static void Main(string[] args)
        {
            Console.Clear();
            int a = 1;
            int b = 1;
            for (int i = 0; i < 20; i++)
            {
                int c = a + b;
                Console.WriteLine(" " + c);
                a = b;
                b = c;
            }
        }
    }
}
