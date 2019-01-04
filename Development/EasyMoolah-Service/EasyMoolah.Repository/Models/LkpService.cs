using System;
using System.Collections.Generic;

namespace EasyMoolah.Repository.Models
{
    public partial class LkpService
    {
        public int Key { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ChangedDate { get; set; }
        public string IsActive { get; set; }
    }
}
