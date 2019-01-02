using System;
using System.Reflection.PortableExecutable;

namespace EasyMoolah.Model
{
    public class requestFSP
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public float SalaryAmount { get; set; }
        public float RequestedAmount { get; set; }
    }

    public class responseFSP
    {
        public string FSPProvider { get; set; }
        public string FSPLogo { get; set; }
        public float ApprovedAmount { get; set; }
        public int TermAmount  { get; set; }
        public string TermPeriod { get; set; } // Day/ Month/ Week
        public string TermsAndConditions { get; set; }
    }
}
