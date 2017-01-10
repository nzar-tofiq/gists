using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace FSM
{
    /// <summary>
    /// Sets the game speed,
    /// A cycle is a specified number of seconds,
    /// A timer ticks at every cycle, executing relevant functions,
    /// Class Game also Creates a motel,
    /// One of the rooms in the motel increases temperature for some mystereous reason,
    /// Increased temperature in one room causes a ripple effect to adjacent rooms,
    /// A fire engine is created to deal with these fires, 
    /// A User(Fire Station Manager) can save rooms by sending a the fire engine to any of the rooms in the motel,
    /// If the room's on fire the engine starts extinguishing untill room is safe or engine has run out of coolant,
    /// Fire Station manager interacts with the program by typing certain commands into the console,
    /// These commands are shown at the begining before the game has started,
    /// Or at any time where user's command is help,
    /// the game finishes when the user inputs quit,
    /// Or all the rooms are either burnedout or safe,
    /// Commands are checked and relevant functions are executed,
    /// </summary>
    class Game
    {
        /// <summary>
        /// Specifies the number of rooms in the motel
        /// </summary>
        private static int numberOfRooms = 16;
        /// <summary>
        /// The amount(degrees) for the rooms temperature to be raised by at each cycle
        /// </summary>
        private static int raiseTemperaturePerCycle = 20;
        /// <summary>
        /// The amount(degrees) for the rooms temperature to be reduced by at each cycle
        /// </summary>
        private static int reduceTemperaturePerCycle = 40;
        /// <summary>
        /// The amount(litres) for the coolant inthe fire engine to be reduced by at each cycle when extinguishing fire
        /// </summary>
        private static int reduceCoolantLevelPerCycle = 40;
        /// <summary>
        /// Motel is a list of rooms
        /// </summary>
        private static List<Room> Motel = new List<Room>();
        /// <summary>
        /// The number of milliseconds at which the timer ticks
        /// </summary>
        private static int refreshRate;
        /// <summary>
        /// If true, game has finished
        /// If false, game is playing
        /// </summary>
        private static Boolean finished;
        /// <summary>
        /// New parser object to check and get commands
        /// </summary>
        private static Parser parser = new Parser();
        /// <summary>
        /// An instatnce of engine
        /// </summary>
        private static Engine engine = new Engine("Engine1");
        /// <summary>
        /// Random room, where temperature is suddenly increased
        /// </summary>
        private static Room randomRoom;
        /// <summary>
        /// The number of burned out rooms
        /// </summary>
        private static int burnedout;
        /// <summary>
        /// The number of saved rooms
        /// </summary>
        private static int saved;
        /// <summary>
        /// The number of rooms that are either burned out or saved
        /// </summary>
        private static int isOutCount;
        
        /// <summary>
        /// The main method
        /// Creates a motel
        /// Shows a welcome screen
        /// Sets the game speed
        /// Adds neighbours to each room
        /// Continues playing until the game is finished
        /// </summary>
        /// <param name="args"></param>
        public static void Main(string[] args)
        {
            CreateMotel(numberOfRooms);
            ChooseARandomRoom();
            PrintHelp();
            Console.WriteLine("Choose Game Speed: easy, medium or hard");
            string difficulty = Console.ReadLine();
            difficulty = difficulty.ToLower();
            SetGameSpeed(difficulty);
            AddNeighbours();
            while (!finished)
            {
                Play();
                if (finished)
                {
                    break;
                }
            }
        }

        /// <summary>
        /// Sets the difficulty level, the faster the game the more difficult it is
        /// Sets the refreshrate to a number(number of milliseconds) according to a user's input
        /// The refresh rate causes the timer to tick at(refreshRate) intervals
        /// everythime the timer ticks it executes the Cycle handler function
        /// </summary>
        /// <param name="difficulty">A word defining the speed of the game(easy, medium or hard)</param>
        static void SetGameSpeed(string difficulty)
        {
            if (difficulty.Equals("easy"))
            {
                refreshRate = (int)GameSpeed.SLOW;
            }
            else if (difficulty.Equals("medium"))
            {
                refreshRate = (int)GameSpeed.AVERAGE;
            }
            else if (difficulty.Equals("hard"))
            {
                refreshRate = (int)GameSpeed.FAST;
            }
            //else if (difficulty.Equals("test"))
            //{
            //    refreshRate = 1;
            //}
            //else if (difficulty.Equals("finished"))
            //{
            //    refreshRate = int.MaxValue;
            //    RoomList();
            //    if (burnedout > saved)
            //        Console.WriteLine("You lost");
            //    else if (saved > burnedout)
            //        Console.WriteLine("Congratulations You've won the game");
            //    finished = true;
            //}
            else
            {
                Console.WriteLine("Try easy medium or hard");
                SetGameSpeed(Console.ReadLine().ToLower());
            }

            TimerCallback timerCallBack = CycleHandler;
            Timer tmr = new Timer(timerCallBack, null, refreshRate, refreshRate);
        }

        /// <summary>
        /// Prints help
        /// Shows all valid command words
        /// </summary>
        public static void PrintHelp()
        {
            string s = "One Motel one fire engine and a spontaneous combustion";
            s += "\nThe aim of the game is to find fires and putting them out";
            Console.WriteLine(s);
            CommandWords.showAll();
        }

        /// <summary>
        /// Creates a motel (A list of rooms)
        /// rooms are identified by a number
        /// Rooms start from room 1
        /// The size of the motel(list) depends on numberOfRooms
        /// Chooses a random room
        /// </summary>
        /// <param name="numberOfRooms">Sets the size of the list(Motel)</param>
        public static void CreateMotel(int numberOfRooms)
        {
            for (int i = 1; i < numberOfRooms + 1; i++)
            {
                Room room = new Room(i);
                Motel.Add(room);
            }
        }

        /// <summary>
        /// Finds a random number between 0 and the last room number in the motel
        /// Whichever room has a room number matching the random number
        /// Is chosen to be the random room
        /// </summary>
        public static void ChooseARandomRoom()
        {
            Random r = new Random();
            int rand = r.Next(numberOfRooms);
            if (rand < 1 || rand > numberOfRooms)   //if the random number is not equal to any room in the motel
                rand = r.Next(numberOfRooms);       //try again find a different number
            else
                randomRoom = Motel[rand - 1];       //otherwise random room is one of the rooms in the motel
        }

        /// <summary>
        /// gets a command and sends it to process command to be processed
        /// </summary>
        public static void Play()
        {
            Console.Write("Command: ");
            Command command = parser.getCommand();
            ProcessCommand(command);
            if (isOutCount >= numberOfRooms)
            {
                SetGameSpeed("finished");
                finished = true;
            }
        }

        /// <summary>
        /// Handles and executes functiones fired at each event cycle
        /// </summary>
        /// <param name="O"></param>
        public static void CycleHandler(Object O)
        {
            burnedout = 0;
            isOutCount = 0;
            saved = 0;
            if (randomRoom != null)
            {
                randomRoom.Heating = true;
            }
            else
            {
                ChooseARandomRoom();
            }

            foreach (Room room in Motel)
            {
                if (room.CurrentTemperature >= 150 && room.CurrentTemperature <= 700)   //if room temperature above safe
                                                                                        //and below burnout
                {
                    if (room.neighbour1 != null)        
                    {
                        room.neighbour1.Heating = true;                                 //neighbours are heating too
                    }
                    if (room.neighbour2 != null)
                    {
                        room.neighbour2.Heating = true;
                    }
                }
                if (room.isOut)
                {
                    isOutCount++;
                    if (room.CurrentTemperature > 700)
                        burnedout++;
                    else if (room.CurrentTemperature < 150)
                        saved++;
                }

                if (room.Heating)                                   //if a room is heating
                {
                    room.RaiseTemperature(raiseTemperaturePerCycle);//raise its temperature
                }

                //if engine is on-call at a this room and has coolant left
                if (room.roomNumber == engine.roomNumber && engine.engineState == EngineStatus.ONCALL && engine.coolantLevel > 0)
                {
                    room.ReduceTemperature(reduceTemperaturePerCycle);      //reduce the room's temperature
                    engine.ReduceCoolantLevel(reduceCoolantLevelPerCycle);
                }
            }
        }

        /// <summary>
        /// Sets one or two neighbours for each room
        /// Depending on where the room is situated in the list(Motel)
        /// </summary>
        internal static void AddNeighbours()
        {
            //delicate code
            //logical confusion is possible 
            //lots of loops and other things that can go wrong
            try
            {
                foreach (Room room in Motel)
                {
                    //n1 and n2 created to avoid null object reference exceptions
                    Room n1 = new Room(100);
                    Room n2 = new Room(101);
                    room.neighbour1 = n1;
                    room.neighbour2 = n2;
                    //A room's position in the Motel list is the same as room number-1
                    //because the List starts from 0 but rooms start from room 1
                    int roomNumberInList = room.roomNumber - 1;
                    //if room is at position 0(room 1) it will only have one neighbour which is room 2(List at 1)
                    if (roomNumberInList == 0)
                        room.neighbour1 = Motel[roomNumberInList + 1];
                    //if room number is between 2 and 15 neighbour 1 is one higher than the room number
                    //and neighbour 2's room number is one lower than the room number
                    else if (roomNumberInList > 0 && roomNumberInList < numberOfRooms - 1)
                    {
                        room.neighbour1 = Motel[roomNumberInList + 1];
                        room.neighbour2 = Motel[roomNumberInList - 1];
                        //test which rooms map on to which neighbours
                        //Console.WriteLine("room "+room.roomNumber+" Neighbour 1->"+room.neighbour1.roomNumber+" Neighbour 2 ->:" + room.neighbour2.roomNumber);
                    }
                    //if room is at position numberOfRooms -1(room 16) it will only have one neighbour which is room 15(List at 14)
                    else if (roomNumberInList == numberOfRooms - 1)
                        room.neighbour2 = Motel[roomNumberInList - 1];
                    else
                    {
                        //mishandled logic prints wrong neighbour setup
                        Console.WriteLine("Wrong Neighbour setup");
                    }
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        /// <summary>
        /// Returns the state of the room passed in as a parameter
        /// </summary>
        /// <param name="room">Room object</param>
        /// <returns>RoomStatus</returns>
        public static RoomStatus GetRoomState(Room room)
        {
            RoomStatus RoomStatus;
            if (room.CurrentTemperature < 150)
            {
                RoomStatus = RoomStatus.SAFE;
            }
            else if (room.CurrentTemperature >= 150 && room.CurrentTemperature <300 )
            {
                RoomStatus = RoomStatus.SMOULDER;
            }
            else if (room.CurrentTemperature >= 300 && room.CurrentTemperature <600 )
            {
                RoomStatus = RoomStatus.DANGER;
            }
            else if (room.CurrentTemperature >= 600 && room.CurrentTemperature <700 )
            {
                RoomStatus = RoomStatus.FIRE;
            }
            else
            {
                RoomStatus = RoomStatus.BURNOUT;
            }
            return RoomStatus;
        }

        /// <summary>
        /// Prints room report on the console
        /// Report consists of the number of safe rooms and the number of burned out rooms
        /// </summary>
        public static void RoomReport()
        {
            int countSafe = 0;
            int countBurnout = 0;
            foreach (Room room in Motel)
            {
                if (room.CurrentTemperature <= 150)
                    countSafe++;
                if (room.CurrentTemperature >= 700)
                    countBurnout++;
            }
            Console.WriteLine(" State \t\t Rooms \n SAFE \t\t {0} \n BURNEDOUT \t {1}", countSafe, countBurnout);
        }

        /// <summary>
        /// Prints a list,
        /// List consists of room number(identifier) and its status
        /// </summary>
        public static void RoomList()
        {
            Console.WriteLine("Room \t Status");
            foreach (Room room in Motel)
            {
                Console.WriteLine("  " + room.roomNumber + " \t " + GetRoomState(room));
            }
        }

        /// <summary>
        /// Sends the fire engine to a specified room.
        /// If the room temperature is above safe and below burnedout then it starts putting out fire.
        /// As the engine extinguishing fire the coolant level is reduced by a certain amount of liters.
        /// </summary>
        /// <param name="room">the room where the engine is sent to, to put out a fire</param>
        public static void EngineGoTo(Room room)
        {
            if (room == null || room.roomNumber == 0 || room.roomNumber > numberOfRooms)
                Console.WriteLine("no room");
            else
            {
                //if the room temperature is between SAFE and BURNOUT
                if (room.CurrentTemperature < 700 && room.CurrentTemperature > 150)
                    //extinguish fire
                    engine.Extinguish(room.roomNumber,reduceCoolantLevelPerCycle);
                else
                    //otherwise report back with the engine state and room state
                    Console.WriteLine("Room {0} is {1}\nEngine status: {2}", room.roomNumber, GetRoomState(room), engine.engineState);
            }
        }

        /// <summary>
        /// Produces an engine report.
        /// Report includes engine properties like identifier and coolant leve.
        /// If the engine is oncall the report also includes room number and room state
        /// </summary>
        public static void EngineReport()
        {
            engine.Report();
            if (engine.engineState == EngineStatus.ONCALL)
                Console.WriteLine("Room {0} Status: {1}", engine.roomNumber, GetRoomState(Motel[engine.roomNumber - 1]));
        }

        /// <summary>
        /// Processes commands.
        /// Each command is tested on an individual base.
        /// Commands matching varified command words are checked to execute relevant functions and change relevant variables
        /// </summary>
        /// <param name="command"></param>
        public static void ProcessCommand(Command command)
        {
            if (command.HasSecondWord)
            {
                if (command.HasThirdWord && command.HasForthWord)
                {
                    if (command.SecondWord.Equals("goto"))
                    {
                        if (command.ThirdWord.Equals("room"))
                        {
                            int roomNo = Convert.ToInt32(command.ForthWord);
                            if (roomNo <1 || roomNo> numberOfRooms)
                                Console.WriteLine("Room {0} does not exist", roomNo);
                            foreach (Room room in Motel)
                            {
                                if (room.roomNumber == roomNo)
                                    EngineGoTo(room);
                            }
                        }
                        else
                            Console.WriteLine("Try something like: engine goto room 6");
                    }
                    else
                        Console.WriteLine("Try something like: engine goto room 7");
                }
                else if (command.CommandWord.Equals("room"))
                {
                    if (command.SecondWord.Equals("list"))
                        RoomList();
                    else if (command.SecondWord.Equals("report"))
                        RoomReport();
                    else
                        Console.WriteLine("Try room list or room report");
                }
                else if (command.CommandWord.Equals("engine"))
                {
                    if (command.SecondWord.Equals("report"))
                        EngineReport();
                    else if (command.SecondWord.Equals("refill"))
                        engine.Refill();
                    else if (command.SecondWord.Equals("recall"))
                        engine.Refill();
                    else
                        Console.WriteLine("Try engine report, engine refill, engine recall or engine go to roomNumber");
                }
            }
            else
            {
                if (command.IsUnknown)
                {
                    Console.WriteLine("I Don't Understand the command");
                }
                else if (command.CommandWord.Equals("help"))
                {
                    PrintHelp();
                }
                else if (command.CommandWord.Equals("quit"))
                {
                    finished = true;
                    refreshRate = int.MaxValue;
                    Console.WriteLine("Thanks for playing. Good bye");
                }
                else if (command.CommandWord.Equals("clear"))
                {
                    Console.Clear();
                }
            }
        }
    }
}
