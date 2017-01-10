using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FSM
{
    /// <summary>
    /// Engine state class defines the state of the engine at any given time in the game
    /// </summary>
    enum EngineStatus { 
        /// <summary>
        /// Fire engine is free and awaiting orders
        /// </summary>
        FREE, 
        /// <summary>
        /// Fire engine is on-call at a specified room in the motel
        /// </summary>
        ONCALL, 
        /// <summary>
        /// Fire engine is refilled and awaiting orders at the station
        /// </summary>
        STATIONED }
}
