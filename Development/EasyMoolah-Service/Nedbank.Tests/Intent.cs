using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class Intent
    {
        [TestMethod]
        public async Task CreateIntent()
        {
            EasyMoolah.Domain.Integration.Intent intent = new EasyMoolah.Domain.Integration.Intent();

            var data = new EasyMoolah.Model.Nedbank.IntentRequest.Data()
            {
                LoanAmount = "5000",
                ExpirationDateTime = System.DateTime.Now,
                Permissions = new List<string>()
                {   { "ReadPersonalLoanOffers" },
                    { "ReadSalaryInformation" },
                    { "SubmitPersonalLoanAcceptance" }
                }
            };
            var intentRequest = new EasyMoolah.Model.Nedbank.IntentRequest.RootObject()
            {
                Data = data
            };

            var lightToken = "qiODsg8l2ecYJb5VD0Jo";

            var result = intent.CreateIntent(intentRequest, lightToken);
        
            Assert.IsTrue(result != null);
        }
}
}

