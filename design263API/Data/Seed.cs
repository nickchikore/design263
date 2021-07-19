using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using design263API.Entities;
using Microsoft.EntityFrameworkCore;

namespace design263API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DataContext context)
        {
            if (await context.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
            foreach (var user in users)
            {
                using var hmac = new HMACSHA512();

                user.UserName = user.UserName.ToLower();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd"));
                user.PasswordSalt = hmac.Key;

                context.Users.Add(user);
            }
            await context.SaveChangesAsync();
        }
        // public static async Task SeedOfferings(DataContext context)
        // {
        //     if (await context.Offerings.AnyAsync()) return;

        //     var offeringData = await System.IO.File.ReadAllTextAsync("Data/OfferingsData.json");
        //     var offerings = JsonSerializer.Deserialize<List<Offering>>(offeringData);

        //     foreach(var offering in offerings)
        //     {
        //         using var hmac = new HMACSHA512();

        //         offering.Name = Nam
        //     }
        // }
    }
}