using System.ComponentModel.DataAnnotations.Schema;

namespace design263API.Entities
{
    [Table("Testimonial")]
    public class TestimonialDetails
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
        public int TestimonialClientReferenceId { get; set; }
    }
}