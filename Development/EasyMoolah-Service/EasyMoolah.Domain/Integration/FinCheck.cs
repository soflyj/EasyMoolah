using EasyMoolah.Model;
using EasyMoolah.Model.Fincheck;
using Fincheck.Integration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Domain.Integration
{
    public class Fincheck
    {
        public string GetOffer(OfferRequest offerRequest)
        {             
            Result result = new Result();
             result.result = ("{\"matches\":[{\"id\":81,\"company_name\":\"Old Mutual\",\"company_logo_path\":\"images\\/partners\\/81\\/logo\\/n2wKkVJCtEho6fCHtgLqxmRbtDkWBZc3OIAjJ3He.png\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/81\\/logo\\/n2wKkVJCtEho6fCHtgLqxmRbtDkWBZc3OIAjJ3He.png\",\"company_website_url\":\"https:\\/\\/www.oldmutualfinance.co.za\\/new-loans?utm_source=Fincheck&utm_medium=ThirdPartyWebsite&utm_campaign=Partnership\",\"rank\":\"1\",\"probability\":70,\"userable\":{\"partner_type\":\"url\"}},{\"id\":112,\"company_name\":\"African Bank\",\"company_logo_path\":\"images\\/partners\\/112\\/logo\\/jCo6CCi61ruBxNs4iDGuduxcpuKwllN1SIknda8i.jpeg\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/112\\/logo\\/jCo6CCi61ruBxNs4iDGuduxcpuKwllN1SIknda8i.jpeg\",\"company_website_url\":\"https:\\/\\/africanbank.co.za\\/\",\"rank\":\"1\",\"probability\":98,\"userable\":{\"partner_type\":\"url\"}}],\"all\":[{\"id\":12,\"company_name\":\"MPOWA Finance (Pty)Ltd\",\"company_logo_path\":\"images\\/partners\\/12\\/logo\\/rg96EJuFICzxruUBI1npBvlBwlfMSFwyzLoRhrAI.svg\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/12\\/logo\\/rg96EJuFICzxruUBI1npBvlBwlfMSFwyzLoRhrAI.svg\",\"company_website_url\":null,\"rank\":\"2\",\"userable\":{\"partner_type\":\"api\"}},{\"id\":31,\"company_name\":\"Bayport Financial Services\",\"company_logo_path\":\"storage\\/images\\/partners\\/31\\/logo\\/l9ghwIbo0Q3FonTLVQp9eTgz28ZVL1AOTxyehuRq.jpeg\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/31\\/logo\\/5TWe0L4q9W6cJYcjH7b4cxZXfy81eHWpcuAEmCAZ.jpeg\",\"company_website_url\":\"https:\\/\\/www.bayportsa.com\",\"rank\":\"3\",\"userable\":{\"partner_type\":\"api\"}},{\"id\":69,\"company_name\":\"RCS\",\"company_logo_path\":\"storage\\/images\\/partners\\/69\\/logo\\/mihdiidjbernsedc.png\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/69\\/logo\\/mihdiidjbernsedc.png\",\"company_website_url\":null,\"rank\":\"4\",\"userable\":{\"partner_type\":\"api\"}},{\"id\":73,\"company_name\":\"Capitec Bank\",\"company_logo_path\":\"images\\/partners\\/73\\/logo\\/xYXOeyRy454KS44BbvuRQF6m9nimEnsrOwblzYcC.jpeg\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/73\\/logo\\/xYXOeyRy454KS44BbvuRQF6m9nimEnsrOwblzYcC.jpeg\",\"company_website_url\":\"www.capitecbank.co.za\",\"rank\":\"6\",\"userable\":{\"partner_type\":\"dashboard\"}},{\"id\":81,\"company_name\":\"Old Mutual\",\"company_logo_path\":\"images\\/partners\\/81\\/logo\\/n2wKkVJCtEho6fCHtgLqxmRbtDkWBZc3OIAjJ3He.png\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/81\\/logo\\/n2wKkVJCtEho6fCHtgLqxmRbtDkWBZc3OIAjJ3He.png\",\"company_website_url\":\"https:\\/\\/www.oldmutualfinance.co.za\\/new-loans?utm_source=Fincheck&utm_medium=ThirdPartyWebsite&utm_campaign=Partnership\",\"rank\":\"1\",\"probability\":70,\"userable\":{\"partner_type\":\"url\"}},{\"id\":77,\"company_name\":\"Capfin\",\"company_logo_path\":\"storage\\/images\\/partners\\/77\\/logo\\/jordggtabtbtvgvc.png\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/77\\/logo\\/jordggtabtbtvgvc.png\",\"company_website_url\":null,\"rank\":\"1\",\"userable\":{\"partner_type\":\"api\"}},{\"id\":112,\"company_name\":\"African Bank\",\"company_logo_path\":\"images\\/partners\\/112\\/logo\\/jCo6CCi61ruBxNs4iDGuduxcpuKwllN1SIknda8i.jpeg\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/112\\/logo\\/jCo6CCi61ruBxNs4iDGuduxcpuKwllN1SIknda8i.jpeg\",\"company_website_url\":\"https:\\/\\/africanbank.co.za\\/\",\"rank\":\"1\",\"probability\":98,\"userable\":{\"partner_type\":\"url\"}},{\"id\":116,\"company_name\":\"Konga\",\"company_logo_path\":\"images\\/partners\\/116\\/logo\\/wtdDe1p5f8G5F9nLZgmZN8zlkvYLEBj8AfCMjnIa.svg\",\"company_logo_url\":\"https:\\/\\/engine.fincheck.co.za\\/storage\\/images\\/partners\\/116\\/logo\\/wtdDe1p5f8G5F9nLZgmZN8zlkvYLEBj8AfCMjnIa.svg\",\"company_website_url\":\"https:\\/\\/www.konga24.co.za\\/\",\"rank\":\"5\",\"userable\":{\"partner_type\":\"api\"}}],\"id\":\"rPwjKN\"}").Replace(" ", "");
            // result.result = offer.GetOffer(offerRequest).result;
            OfferResponse offerResponse  = JsonConvert.DeserializeObject<OfferResponse>(result.result);

            var response = JsonConvert.SerializeObject(offerResponse.matches);

            return response;            
        }
    }
}
