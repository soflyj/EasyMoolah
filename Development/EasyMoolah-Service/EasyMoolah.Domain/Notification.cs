using EasyMoolah.Model;
using System.Threading.Tasks;

namespace EasyMoolah.Domain
{
    public class Notification
    {
        public async static Task<Result> ProcessingResults(Model.Notification.ProcessingResults _processingResults)
        {
            var response = await EasyMoolah.Notification.Email.ProcessingResults(_processingResults);

            return response;
        }

        public async static Task<Result> AcceptOffer(Model.Notification.AcceptOffer _acceptOffer)
        {
            var response = await EasyMoolah.Notification.Email.AcceptOffer(_acceptOffer);            

            return response;
        }
    }
}
