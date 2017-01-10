using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FSM
{
    /// <summary>
    /// Fire engine used by the fire station manager to extinguish fires in a specified room in the motel
    /// Has a limited tank to store coolant
    /// Coolant level reduces while putting out fire
    /// Engine can be refilled at fire station
    /// Engine produces reports
    /// </summary>
    class Engine
    {
        /// <summary>
        /// Maximum coolant level in litres that a fire engine can carry
        /// </summary>
        readonly static int MAXIMUM_COOLANT_LEVEL_IN_LITRES = 600;
        /// <summary>
        /// Engine Identifier
        /// </summary>
        public string Identifier { get; private set; }
        /// <summary>
        /// State of the fire engine can be Free, Stationed or On call
        /// </summary>
        public EngineStatus engineState;
        /// <summary>
        /// Current coolant level in litres
        /// </summary>
        public int coolantLevel;
        /// <summary>
        /// Room identifier for engine if called to extinguish a fire
        /// Or when the Fire engine is on-call, its attending to a room number
        /// </summary>
        public int roomNumber;

        /// <summary>
        /// Creates a new instance of Engine
        /// </summary>
        /// <param name="Identifier"></param>
        public Engine(string Identifier)
        {
            this.Identifier = Identifier;
            engineState = EngineStatus.STATIONED;
            coolantLevel = MAXIMUM_COOLANT_LEVEL_IN_LITRES;
        }

        /// <summary>
        /// Extinguishes fire at a specified room
        /// Reduces coolant level by a certain amount
        /// Changes Engine state to on call
        /// </summary>
        /// <param name="roomNumber">Identifier for the room that the fire engine is at or going to</param>
        /// <param name="reduceByAmount">Coolant reduced by this amount, when extinguishing fire</param>
        public void Extinguish(int roomNumber, int reduceByAmount)
        {
            if (coolantLevel > 0)
            {
                this.roomNumber = roomNumber;
                ReduceCoolantLevel(reduceByAmount);
                engineState = EngineStatus.ONCALL;
                Console.WriteLine("Extinguishing fire at room" + roomNumber);
            }
        }

        /// <summary>
        /// Reduces coolant level by a certain amount
        /// </summary>
        /// <param name="reduceByAmount">The amount for coolant level to be reduced by</param>
        public void ReduceCoolantLevel(int reduceByAmount)
        {
            //Reduce coolant level if there is coolant left in the tank
            if (coolantLevel > 0)
            {
                coolantLevel -= reduceByAmount;
            }
            else if (coolantLevel == 0)
            {
                //When coolant finished don't put fire out
                engineState = EngineStatus.FREE;
                Console.WriteLine("Engine has run out of coolant!");
            }
        }

        /// <summary>
        /// Refills the fire engine with coolant to maximum level
        /// Changes the engine state to stationed
        /// </summary>
        public void Refill()
        {
            coolantLevel = MAXIMUM_COOLANT_LEVEL_IN_LITRES;
            engineState = EngineStatus.STATIONED;
            Console.WriteLine("Engine refilled\nEngine Status: "+engineState);
        }

        /// <summary>
        /// Reports back to the fire station manager
        /// With engine identifier, coolant level, engine state and room number if on-call
        /// </summary>
        public void Report()
        {
            if (engineState == EngineStatus.ONCALL)
                Console.WriteLine("Engine ID: " + Identifier + "\nCurrent coolant level: " + coolantLevel + "litres\nStatus: " + engineState + "\nAt Room " + roomNumber);
            else
                Console.WriteLine("Engine ID: " + Identifier + "\nCurrent coolant level: " + coolantLevel + "litres\nStatus: " + engineState);
        } 
    }
}
