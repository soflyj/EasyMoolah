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
            // fincheck.InsertApiLog(Fincheck.Integration.Offer.apiLog);

            return response;
        }

        public static async Task<int> AcceptOffer(AcceptRequest _acceptRequest)
        {
            var response = -1;

            //var acceptRequest = Fincheck.Integration.Offer.AcceptOffer(_acceptRequest);
            fincheck.InsertApiLog(Fincheck.Integration.Offer.apiLog);

            //  if (acceptRequest.resultCode == 0)
            if (true)
            {
                response = 1;

                var borrower = Repository.CRUD.commonRepo.GetBorrower(_acceptRequest.applicationKey);
                Model.Notification.AcceptOffer acceptOffer = new Model.Notification.AcceptOffer();
                acceptOffer.applicationKey = _acceptRequest.applicationKey;
                acceptOffer.fromAddress = "";
                acceptOffer.probability = _acceptRequest.probability;
                acceptOffer.providerLogo = _acceptRequest.providerLogo;
                acceptOffer.providerName = _acceptRequest.providerName;
                acceptOffer.providerWebsite = _acceptRequest.providerWebsite;
                acceptOffer.subject = "Offer Accepted";
                acceptOffer.toAddress = borrower.Email;
                acceptOffer.toAddressName = borrower.FirstName + " " + borrower.LastName;
                acceptOffer.toAddressTitle = "";

                await Notification.AcceptOffer(acceptOffer);
            }

            return response;
        }
    }
}
