using System;
using System.Collections.Generic;

namespace EasyMoolah.Repository.Models
{
    public partial class TblBorrower
    {
        public int Key { get; set; }
        public string IdNumber { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        public string LandlineNumber { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ChangedDate { get; set; }
        public string IsActive { get; set; }
    }
}
