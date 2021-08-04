namespace design263API.Entities
{
    public class Offer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Details Details { get; set; }
        public Offering Offering{ get; set; }
        public  int OfferingId{ get; set; }
    }
}