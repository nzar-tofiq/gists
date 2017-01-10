using FSM;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

namespace TestProject1
{
    
    
    /// <summary>
    ///This is a test class for GameTest and is intended
    ///to contain all GameTest Unit Tests
    ///</summary>
    [TestClass()]
    public class GameTest
    {


        private TestContext testContextInstance;

        /// <summary>
        ///Gets or sets the test context which provides
        ///information about and functionality for the current test run.
        ///</summary>
        public TestContext TestContext
        {
            get
            {
                return testContextInstance;
            }
            set
            {
                testContextInstance = value;
            }
        }
        public void enngineGotoTest(int roomNumber)
        {
            Room room = new Room(1);
            room.CurrentTemperature = 200;
            Game.EngineGoTo(room);
            Assert.Inconclusive("method can not be tested");
        }

        public void ProcessCommandTest()
        {
            Command command = new Command();
            command.CommandWord = "engine";
            command.SecondWord = "goto";
            command.ThirdWord = "room";
            command.ForthWord = "-1";
            Game.ProcessCommand(command);
            Assert.Inconclusive("");
        }

        #region Additional test attributes
        // 
        //You can use the following additional attributes as you write your tests:
        //
        //Use ClassInitialize to run code before running the first test in the class
        //[ClassInitialize()]
        //public static void MyClassInitialize(TestContext testContext)
        //{
        //}
        //
        //Use ClassCleanup to run code after all tests in a class have run
        //[ClassCleanup()]
        //public static void MyClassCleanup()
        //{
        //}
        //
        //Use TestInitialize to run code before running each test
        //[TestInitialize()]
        //public void MyTestInitialize()
        //{
        //}
        //
        //Use TestCleanup to run code after each test has run
        //[TestCleanup()]
        //public void MyTestCleanup()
        //{
        //}
        //
        #endregion


        /// <summary>
        ///A test for EngineGoTo
        ///</summary>
        [TestMethod()]
        public void EngineGoToTest()
        {
            Room room = null; // TODO: Initialize to an appropriate value
            Game.EngineGoTo(room);
            Assert.Inconclusive("A method that does not return a value cannot be verified.");
        }
    }
}
