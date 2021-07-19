using System.Collections;
using System.Collections.Generic;

namespace design263API.Entities
{
    public class Offerings
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Reference { get; set; }
        public string Url { get; set; }
        public string Summary { get; set; }
        public ICollection<Offering> Services { get; set; }
    }
}