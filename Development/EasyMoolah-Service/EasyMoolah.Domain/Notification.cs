using EasyMoolah.Model;

namespace EasyMoolah.Domain
{
    public class Notification
    {
        public static Result ProcessingResults(Model.Notification.ProcessingResults _processingResults)
        {
            var response = EasyMoolah.Notification.Email.ProcessingResults(_processingResults);

            return response;
        }

        public static Result AcceptOffer(Model.Notification.AcceptOffer _acceptOffer)
        {
            var response = EasyMoolah.Notification.Email.AcceptOffer(_acceptOffer);

            return response;
        }
    }
}
