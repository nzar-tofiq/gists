using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FSM
{
    enum RoomStatus { 
        
        /// <summary>
        /// Room state is safe. When temperature = 0.
        /// </summary>
        SAFE = 0, 
        
        /// <summary>
        /// Room state Danger. When temperature = 150.
        /// </summary>
        DANGER = 150, 
        /// <summary>
        /// Room state Smoulder danger. When temperature = 300.
        /// </summary>
        SMOULDER = 300, 
        /// <summary>
        /// Room state Fire. When temperature = 600.
        /// </summary>
        FIRE = 600, 
        /// <summary>
        /// Room state Burnout. When temperature = 700.
        /// </summary>
        BURNOUT = 700 }
}
