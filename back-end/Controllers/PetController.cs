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
}
