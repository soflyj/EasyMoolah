using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class PersonalLoan
    {
        [TestMethod]
        public async Task AcceptPersonalLoan()
        {
            EasyMoolah.Domain.Integration.PersonalLoan personalLoan = new EasyMoolah.Domain.Integration.PersonalLoan();

            var personalLoanRequest = new EasyMoolah.Model.NedbankAPI.PersonLoanRequest.RootObject() { };

            var lightToken = "D23vbp3L4RHLvLaqJXtM";

            var result = personalLoan.AcceptPersonalLoan(personalLoanRequest, lightToken);

            Assert.IsTrue(result != null);
        }      
    }
}

