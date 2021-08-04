using System.Collections.Generic;

namespace design263API.Entities
{
    public class TestimonialClientReference
    {
        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public string Sector { get; set; }
        public List<string> Jobs { get; set; }
        public TestimonialDetails TestimonialDetails { get; set; }
    }
}