namespace design263API.Entities
{
    public class Details
    {
        public string Title { get; set; }
        public string Description{get; set;}
        public Offer Offer { get; set; }
        public int OfferId { get; set; }
    }
}