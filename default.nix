with import <nixpkgs> {};

pkgs.mkShell rec {
    name = "surfingkeysConfNodejsShell";

    buildInputs = [
      git
      nodejs_18
    ];

    shellHook = ''
      echo "Nix shell environment with nodejs_18."
    '';

}
