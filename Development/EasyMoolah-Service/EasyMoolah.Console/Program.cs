using System;
using EasyMoolah.Repository;

namespace EasyMoolah.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");

            Repository.BorrowerRepository borrower = new BorrowerRepository();
            
            var result = borrower.GetAllBorrowers();
        }
    }
}
