/**
 * ═══════════════════════════════════════════════════════════════
 *  CONFIGURAÇÃO DO SITE — edite principalmente ESTE arquivo
 * ═══════════════════════════════════════════════════════════════
 */

export const site = {
  brand: {
    name: "EMC - Consig",
    suffix: "consignado",
    get fullName() {
      return `${this.name} — ${this.suffix}`;
    },
    slug: "emcconsig",
  },

  assets: {
    favicon: "/img/logo/logo-emc.png",
    logo: "/img/logo/logo-emc.png",
    logoLight: "/img/logo/logo-emc.png",
    logoDark: "/img/logo/logo-emc.png",
    logoMark: "/img/logo/logo-emc.png",
    logoFull: "/img/logo/logo-emc.png",
    loja: "/img/emc-loja.png",
    grid: "/img/saas-app/grid.png",
    gridTwo: "/img/saas-app/grid-two.png",
  },

  legal: {
    cnpj: "39.384.168/0001-83",
    copyright: "© 2026 EMC - Consig Ltda. Todos os direitos reservados.",
  },

  contact: {
    phoneDisplay: "(11) 91554-9221",
    phoneTel: "+5511915549221",
    phoneWhatsapp: "5511915549221",
    email: "emcconsig@gmail.com",
  },

  social: {
    instagram: {
      handle: "@emcconsig",
      url: "https://www.instagram.com/emcconsig/",
    },
  },

};

export function whatsappLink(text) {
  return `https://wa.me/${site.contact.phoneWhatsapp}?text=${encodeURIComponent(text)}`;
}
