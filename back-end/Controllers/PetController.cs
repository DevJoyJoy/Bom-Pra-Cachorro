namespace BomPraCachorro.Controllers;
using BomPraCachorro.Services;
using BomPraCachorro.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/pet")]
public class PetController(IPetService petService) : ControllerBase
{
    [HttpGet("{id}")]
    public async Task<IActionResult> GetPet(int id)
    {
        try
        {
            var pet = await petService.GetPet(id);
            return Ok(pet);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("all")]
    public async Task<IActionResult> GetAllPets()
    {
        try
        {
            var pets = await petService.GetAllPets();
            return Ok(pets);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost("add")]
    public async Task<IActionResult> AddNewPet(Pet pet)
    {
        try
        {
            var result = await petService.AddPet(pet);

            if (result)
                return Ok(result);

            return BadRequest();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost("update")]
    public async Task<IActionResult> UpdatePet(Pet pet)
    {
        try
        {
            var result = await petService.UpdatePet(pet);

            if (result)
                return Ok(result);

            return BadRequest();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("remove")]
    public async Task<IActionResult> RemovePet(int petId)
    {
        try
        {
            var result = await petService.DeletePet(petId);

            if (result)
                return Ok(result);

            return BadRequest();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
