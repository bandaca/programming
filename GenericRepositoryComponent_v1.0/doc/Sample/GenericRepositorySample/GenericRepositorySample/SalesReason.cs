//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace GenericRepositorySample
{
    using System;
    using System.Collections.Generic;
    
    public partial class SalesReason
    {
        public SalesReason()
        {
            this.SalesOrderHeaderSalesReason = new HashSet<SalesOrderHeaderSalesReason>();
        }
    
        public int SalesReasonID { get; set; }
        public string Name { get; set; }
        public string ReasonType { get; set; }
        public System.DateTime ModifiedDate { get; set; }
    
        public virtual ICollection<SalesOrderHeaderSalesReason> SalesOrderHeaderSalesReason { get; set; }
    }
}
