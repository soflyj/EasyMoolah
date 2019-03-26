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
        public static Result GetOffer(OfferRequest _offerRequest)
        {
            var response = Fincheck.Integration.Offer.GetOffer(_offerRequest);
            ApiLog.Insert(Fincheck.Integration.Offer.apiLog);

            return response;
        }

        public static Result AcceptOffer(AcceptRequest _acceptRequest)
        {
            var response = Fincheck.Integration.Offer.AcceptOffer(_acceptRequest);
            ApiLog.Insert(Fincheck.Integration.Offer.apiLog);

            return response;
        }
    }
}
