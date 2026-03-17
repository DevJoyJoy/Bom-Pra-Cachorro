namespace BomPraCachorro.Services;
using BomPraCachorro.Models;


public interface IPetService
{
    Task<Pet> GetPet (int id);
    Task<List<Pet>> GetAllPets();
    Task<Pet> AddPet (Pet pet);
    Task<Pet> UpdatePet (Pet pet);
    Task<bool> DeletePet (int id);
}