using System;
using System.Collections.Generic;

namespace EasyMoolah.Repository.Models
{
    public partial class Offer
    {
        public int Key { get; set; }
        public int? ApiId { get; set; }
        public int? Id { get; set; }
        public string Type { get; set; }
        public string CompanyName { get; set; }
        public string CompanyLogoPath { get; set; }
        public string CompanyLogoUrl { get; set; }
        public string CompanyWebsiteUrl { get; set; }
        public int? Rank { get; set; }
        public int? Probability { get; set; }
        public string Userable { get; set; }
    }
}
