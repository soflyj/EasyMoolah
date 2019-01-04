using System;
using System.Collections.Generic;

namespace EasyMoolah.Repository.Models
{
    public partial class TblBorrowerAddress
    {
        public int Key { get; set; }
        public int? BorrowerKey { get; set; }
        public string FullAdress { get; set; }
        public string Suburb { get; set; }
        public string City { get; set; }
        public double? Longitude { get; set; }
        public double? Latitude { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ChangedDate { get; set; }
        public string IsActive { get; set; }
    }
}
