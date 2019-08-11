using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Model
{
    public enum ResultEnum
    {
        [Display(Name = "OK", GroupName = "Postive")]
        OK = 1,
        [Display(Name = "Api fault", GroupName = "Negative")]
        API = 2,
        [Display(Name = "Parameter fault", GroupName = "Negative")]
        Parameter = 3,
        [Display(Name = "Repository fault", GroupName = "Negative")]
        CRUD = 4,
        [Display(Name = "Notification fault", GroupName = "Negative")]
        Notification = 5
    }
}
