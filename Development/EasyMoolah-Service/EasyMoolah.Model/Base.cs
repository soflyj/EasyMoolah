using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model
{
    public class Base
    {
        public int Key { get; set; }        
        public bool? IsActive { get; set; }
        public System.DateTime? CreatedDate { get; set; }
        public System.DateTime? ChangedDate { get; set; }
    }
}
