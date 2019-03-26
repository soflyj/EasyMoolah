using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model.Fincheck;
using EasyMoolah.Model;

namespace EasyMoolah.Domain.Integration
{
    public class Offer
    {
        public async static Task<Result> GetOffer(OfferRequest _offerRequest)
        {
            var response = Fincheck.Integration.Offer.GetOffer(_offerRequest);
            await ApiLog.Insert(Fincheck.Integration.Offer.apiLog);

            return response;
        }

        public async static Task<Result> AcceptOffer(AcceptRequest _acceptRequest)
        {
            var response = Fincheck.Integration.Offer.AcceptOffer(_acceptRequest);
            await ApiLog.Insert(Fincheck.Integration.Offer.apiLog);

            return response;
        }
    }
}
