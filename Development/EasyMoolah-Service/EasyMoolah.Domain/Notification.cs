using EasyMoolah.Model;

namespace EasyMoolah.Domain
{
    public class Notification
    {
        public static Result confirmationOfApplication(Model.Notification.ConfirmationOfApplication confirmationOfApplication)
        {
            var response = EasyMoolah.Notification.Email.ConfirmationOfApplication(confirmationOfApplication);

            return response;
        }
    }
}
