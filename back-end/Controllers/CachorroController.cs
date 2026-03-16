namespace BomPraCachorro.Controllers;

[ApiController]
[Route("api/wifi")]
public class CachorroController(IPetService dogService) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> PostScan([FromBody] int id)
    {
        try
        {
            var dog = await dogService.GetCachorro(id);
            return Ok(dog);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}
