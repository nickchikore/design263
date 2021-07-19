using design263API.Entities;
using Microsoft.EntityFrameworkCore;

namespace design263API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        public DbSet<AppUser> Users { get; set; }
        public DbSet<Offering> Offerings { get; set; }
    }
}