using System;
using System.Collections.Generic;

namespace EasyMoolah.Repository.Models
{
    public partial class Accept
    {
        public int Key { get; set; }
        public int? ApiId { get; set; }
        public string LeadId { get; set; }
        public int? Id { get; set; }
        public string CompanyName { get; set; }
        public string CompanyLogoPath { get; set; }
        public string CompanyLogoUrl { get; set; }
        public string CompanyWebsiteUrl { get; set; }
        public string Status { get; set; }
        public string Code { get; set; }
    }
}
