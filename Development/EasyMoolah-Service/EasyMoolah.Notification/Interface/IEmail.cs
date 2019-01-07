using System;
using System.Collections.Generic;
using System.Text;
using EasyMoolah.Model.Email;

namespace EasyMoolah.Notification.Interface
{
    public interface IEmail
    {
        Response sendEmail();
    }
}
