using System;
using Fincheck.Integration;
using EasyMoolah.Repository;

namespace EasyMoolah.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");

            Repository.FinCheckRepository fincheckRepository = new FinCheckRepository();

            //fincheckRepository.AddApiLog(new Model.Database.Fincheck.Apilog() {Endpoint = "",
            //Http = "",
            //Id = 1,
            //Method = "",
            //Request = "",
            //Response = "",
            //SessionId = 1,
            //TimeStamp = System.DateTime.Now,
            //Token = ""});

            //fincheckRepository.GetApiLog();

           



            //var result = borrower.GetAllBorrowers();

            //Fincheck.Integration.Intent intent = new Intent();

            //intent.GetIntent();
        }
    }
}
