//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAppAPIs.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class TicketDetail
    {
        public long TicketDetailsID { get; set; }
        public System.DateTime TicketDetailsDate { get; set; }
        public string TicketMessage { get; set; }
        public int TicketID { get; set; }
        public int DepartmentsID { get; set; }
        public int EditID { get; set; }
        public int TicketStatusTicketDetailsID { get; set; }
    
        public virtual Ticket Ticket { get; set; }
        public virtual TicketStatu TicketStatu { get; set; }
    }
}