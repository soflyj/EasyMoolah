using System;
using EasyMoolah.Repository;
using Fincheck.Integration;

namespace EasyMoolah.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");

            //Repository.BorrowerRepository borrower = new BorrowerRepository();
            
            //var result = borrower.GetAllBorrowers();

            Fincheck.Integration.Intent intent = new Intent();

            intent.getIntentById(1);
        }
    }
}
