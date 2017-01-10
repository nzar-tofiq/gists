using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FSM
{
    /// <summary>
    /// A class defines a room in a motel
    /// </summary>
    class Room
    {
        /// <summary>
        /// Room instance identifier
        /// </summary>
        public int roomNumber { get; private set; }
        /// <summary>
        /// Previous room temperature
        /// </summary>
        private static int temperature;
        /// <summary>
        /// Adjacent room
        /// </summary>
        public Room neighbour1 { get; set; }
        /// <summary>
        /// Adjacent room
        /// </summary>
        public Room neighbour2 { get; set; }
        /// <summary>
        /// Current temperature
        /// </summary>
        public int CurrentTemperature { get; set; }
        /// <summary>
        /// If true room temperature rising, if false room temperature not rising
        /// </summary>
        public Boolean Heating { get; set; }
        /// <summary>
        /// If true room temperature dropping, if false room temperature not dropping
        /// </summary>
        public Boolean Cooling { get; private set; }
        /// <summary>
        /// If true room temperature shoud not change, 
        /// either room has caught fire and the fire has been put, or room is burnedout
        /// </summary>
        public Boolean isOut { get; private set; }

        /// <summary>
        /// Creates a new instance of Room
        /// </summary>
        /// <param name="roomNumber">Room identifier</param>
        public Room(int roomNumber)
        {
            this.roomNumber = roomNumber;
            Heating = false;
            Cooling = false;
            isOut = false;
            CurrentTemperature = 0;
            temperature = 0;

        }

        /// <summary>
        /// Raises room temperature
        /// </summary>
        /// <param name="raiseBy">Degrees for the temperature to be raised by</param>
        public void RaiseTemperature(int raiseBy)
        {
            if (Cooling && CurrentTemperature < 150) //room is saved
            {
                temperature = 0;                    //don't change its teperature
                CurrentTemperature = 0;
                Heating = false;
                isOut = true;
            }
            else if (CurrentTemperature < 700)
            {
                temperature = CurrentTemperature;
                CurrentTemperature += raiseBy;
                isOut = false;
                Heating = true;
            }
            else
            {
                temperature = 700;
                CurrentTemperature = 700;
                Heating = false;            //burned out no longer heating
                isOut = true;
            }
        }

        /// <summary>
        /// Reduces room temperature
        /// </summary>
        /// <param name="reduceBy">Degrees for the temperature to be reduced by</param>
        public void ReduceTemperature(int reduceBy)
        {
            if (CurrentTemperature < 700 )
            {
                temperature = CurrentTemperature;
                CurrentTemperature -= reduceBy;
                isOut = false;
                Cooling = true;
            }
            else if(CurrentTemperature <150)
            {
                if (Cooling)
                {
                    temperature = 0;
                    CurrentTemperature = 0;
                    Cooling = false;
                    isOut = true;
                }
            }
        }
    }
}

